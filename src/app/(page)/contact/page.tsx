"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Paper,
} from "@mui/material";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Box sx={{ bgcolor: "#f9fafb", py: 8 }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          fontWeight={600}
          gutterBottom
          sx={{ mb: 1 }}
        >
          Contact <span style={{ color: "#f3c60c" }}>Us</span>
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Have a question or feedback? We'd love to hear from you.
        </Typography>

        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  rows={5}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 600,
                    borderRadius: 3,
                    px: 2.5,
                    background: "linear-gradient(to right, #f3c60c, #ffc107)",
                    "&:hover": {
                      background: "linear-gradient(to right, #e6b800, #ffb300)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>

      <Snackbar
        open={submitted}
        autoHideDuration={3000}
        onClose={() => setSubmitted(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;
