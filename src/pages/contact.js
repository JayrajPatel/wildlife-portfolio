import React, { useState } from "react"
import Layout from "../components/layout"
import axios from "axios"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Form submission logic here
    const { firstName, lastName, email, subject, message } = formData
    const data = {
      name: `${firstName} ${lastName}`,
      email,
      subject,
      message
    }

    axios.post("jayraj.patel1407@gmail.com", data)
      .then(response => {
        alert("Message sent successfully!")
        // Clear form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: ""
        })
      })
      .catch(error => {
        alert("An error occurred. Please try again.")
      })
  }

  return (
    <Layout>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}

export default ContactPage
