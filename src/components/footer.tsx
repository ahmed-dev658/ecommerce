import { Box, Container, Typography, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#111", color: "#eee", py: 6, mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo / About */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="goldenrod">
              YourStore
            </Typography>
            <Typography variant="body2">
              Premium quality products delivered to your door. Shop with confidence and ease.
            </Typography>
          </Grid>

          {/* Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">Home</Link>
              <Link href="/about" color="inherit" underline="hover">About</Link>
              <Link href="/product" color="inherit" underline="hover">Products</Link>
              <Link href="/contact" color="inherit" underline="hover">Contact</Link>
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="#" color="inherit" underline="hover">Contact Us</Link>
              <Link href="#" color="inherit" underline="hover">FAQs</Link>
              <Link href="#" color="inherit" underline="hover">Shipping & Returns</Link>
              <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color="inherit" href="#"><Facebook /></IconButton>
              <IconButton color="inherit" href="#"><Twitter /></IconButton>
              <IconButton color="inherit" href="#"><Instagram /></IconButton>
              <IconButton color="inherit" href="#"><LinkedIn /></IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Box mt={4} textAlign="center" fontSize="0.875rem">
          &copy; {new Date().getFullYear()} YourStore. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
