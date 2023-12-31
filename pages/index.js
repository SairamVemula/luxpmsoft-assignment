import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Input from '../components/Input'
import Button from '../components/Button'
import React, { useState } from 'react'
import Popup from '../components/Popup'
import { useRouter } from 'next/router'

export default function Home() {
  const [showLoader, setShowLoader] = useState(false)
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState('');
  const [passError, setPassError] = useState(null);
  const [isOpen, setIsOpen] = useState('');
  const router = useRouter();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function isValidPassword(passsword) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passsword);
  }

  const handleChangeEmail = event => {
    if (!isValidEmail(event.target.value.trim())) {
      setEmailError('Email is invalid');
    } else {
      setEmailError(null);
    }
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    if (!isValidPassword(event.target.value.trim())) {
      setPassError('Minimum eight characters, at least one letter, one number and one special character');
    } else {
      setPassError(null);
    }
    setPassword(event.target.value);
  };

  const login = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
    if (res.ok) return await res.json();
    else throw await res.json();
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setShowLoader(true)
    try {
      const res = await login();
      router.push('/home')
    } catch (e) {
      console.log(e)
      setIsOpen(e.msg)
    }
    setShowLoader(false);

    // setTimeout(() => setShowLoader(false), 1000)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.login}>
          <img src='/Group.svg' className={styles.cartIcon} />
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.inputs}>
              <Input icon='/user.svg' placeholder='username' onChange={handleChangeEmail} error={emailError} value={email} />
              <Input icon='/lock.svg' placeholder='password' onChange={handleChangePassword} error={passError} value={password} />
            </div>
            <Button text='Login' loading={showLoader} disabled={!!(!email || showLoader || emailError || !password || passError)} />
            <a className={styles.forget}>Forget password?</a>
          </form>
        </div>
        <img src='/Vector-right.svg' className={styles.patternRight} />
        <img src='/Group-left.svg' className={styles.patternLeft} />
        {isOpen && <Popup
          content={<>
            <b>Login</b>
            <p>{isOpen}</p>
            <Button text='OK' onSubmit={togglePopup} />
          </>}
          handleClose={togglePopup}
        />}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
