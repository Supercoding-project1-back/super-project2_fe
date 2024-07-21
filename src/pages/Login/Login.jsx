import React, { useState } from "react";
import styles from "./Login.module.scss";
import { TextField } from "../../components/Core";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signHandler = async () => {
    const data = { email, password };
    try {
      const response = await fetch("http://13.54.82.156:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("로그인하는데 실패하였습니다.");
      }
      // 로그인 성공 시, 로컬 스토리지에 로그인 상태 저장
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } catch (error) {
      alert("로그인 정보를 다시 입력해 주세요.");
    }
  };

  const joinHandler = () => {
    navigate("/join");
  };

  return (
    <div className={styles["content"]}>
      <div className={styles["card"]}>
        <div className={styles["border"]}>
          <div className={styles["first-section"]}>
            <span className={styles["login-title"]}>로그인</span>
          </div>
          <div className={styles["input-section"]}>
            <div className={styles["text-section"]}>
              <TextField
                className={styles["loginId"]}
                value={email}
                placeholder={"이메일"}
                onChange={(value) => setEmail(value)}
              />
            </div>
            <div className={styles["text-section"]}>
              <TextField
                className={styles["password"]}
                type="password"
                value={password}
                placeholder={"비밀번호"}
                onChange={(value) => setPassword(value)}
              />
            </div>
          </div>
          <div className={styles["button-section"]}>
            <button className={styles["login"]} onClick={signHandler}>
              SIGN IN
            </button>
            <button className={styles["join"]} onClick={joinHandler}>
              JOIN US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;