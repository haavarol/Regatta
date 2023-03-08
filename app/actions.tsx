"use client"
import { signIn, signOut } from "next-auth/react"
import styles from "./header.module.css"

export function SignOut() {
  return (
    <button className={styles.button} onClick={() => signOut()}>
      Sign out
    </button>
  )
}

export function SignIn() {
  return (
    <button className={styles.buttonPrimary} onClick={() => signIn()}>
      Sign in
    </button>
  )
}