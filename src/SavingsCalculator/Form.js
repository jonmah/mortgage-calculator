import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const {
    control,
    errors,
    formState,
    handleSubmit,
    reset,
    setValue,
  } = useForm()

  return <div>Form</div>
}

export default Form
