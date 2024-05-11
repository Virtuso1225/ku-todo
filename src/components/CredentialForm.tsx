import { css } from '@styled-stytem/css'
import { useState } from 'react'

import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const CredentialForm = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <Card
      className={css({
        w: '400px',
        h: '400px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.7s',
        perspective: '1000px'
      })}
      style={{
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        transitionDuration: '700'
      }}
    >
      <div
        className={css({
          backfaceVisibility: 'hidden',
          position: 'absolute',
          w: 'full',
          h: 'full'
        })}
      >
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to use Todo</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm isFlipped={isFlipped} handleFlip={() => setIsFlipped(f => !f)} />
        </CardContent>
      </div>
      <div
        className={css({ backfaceVisibility: 'hidden' })}
        style={{
          transition: 'transform 0.7s',
          transform: 'rotateY(180deg)',
          transitionDuration: '700',
          zIndex: isFlipped ? 10 : -10
        }}
      >
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Enter your credentials to use Todo</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm isFlipped={isFlipped} handleFlip={() => setIsFlipped(f => !f)} />
        </CardContent>
      </div>
    </Card>
  )
}

export default CredentialForm
