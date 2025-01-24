import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgba(30,64,175,0.2), rgba(147,51,234,0.2), rgba(219,39,119,0.2))',
            'linear-gradient(to bottom right, rgba(219,39,119,0.2), rgba(30,64,175,0.2), rgba(147,51,234,0.2))',
            'linear-gradient(to bottom right, rgba(147,51,234,0.2), rgba(219,39,119,0.2), rgba(30,64,175,0.2))'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
    </div>
  )
} 