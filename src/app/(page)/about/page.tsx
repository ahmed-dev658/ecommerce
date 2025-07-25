// "use client"; // If you're using Next.js 13+ app router

// import { Box, Container, Typography, Grid, Button } from "@mui/material";
// import Image from "next/image"; // Only if using Next.js. Remove if using plain React.

// const AboutPage = () => {
//   return (
//     <Container maxWidth="lg" sx={{ py: 6 }}>
//       {/* Intro Section */}
//       <Box textAlign="center" mb={5}>
//         <Typography variant="h3" fontWeight={600} gutterBottom>
//           Welcome to Skyline Mart
//         </Typography>
//         <Typography variant="h6" color="text.secondary">
//           Your go-to destination for quality, style, and convenience — all in
//           one place.
//         </Typography>
//       </Box>

//       {/* About & Image */}
//       <Grid container spacing={6} alignItems="center">
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5" fontWeight={600} gutterBottom>
//             Our Story
//           </Typography>
//           <Typography variant="body1" color="text.secondary" mb={2}>
//             Founded in 2022, Skyline Mart was created to make online shopping
//             easier, faster, and more fun. We believe in bringing only the best
//             products to our customers — from trendy fashion to daily essentials.
//           </Typography>

//           <Typography variant="h5" fontWeight={600} gutterBottom>
//             Why Choose Us?
//           </Typography>
//           <ul style={{ paddingLeft: "1.2rem" }}>
//             <li>✅ Affordable prices & exclusive deals</li>
//             <li>✅ Fast & reliable shipping</li>
//             <li>✅ 24/7 customer support</li>
//             <li>✅ Easy returns & secure checkout</li>
//           </ul>

//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ mt: 3 }}
//             href="/contact"
//           >
//             Contact Us
//           </Button>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Box sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
//             <Image
//               src="/ecommerce-optimization.png"
//               alt="About us"
//               width={600}
//               height={400}
//               style={{ width: "100%", height: "auto", objectFit: "cover" }}
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default AboutPage;

"use client";

import { Box, Container, Typography, Grid, Button, Stack } from "@mui/material";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Intro Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Welcome to <span style={{ color: "goldenrod" }}>Skyline Mart</span>
        </Typography>
        <Typography variant="h6" color="text.secondary" maxWidth="sm" mx="auto">
          Your one-stop destination for quality, style, and everyday convenience
          — all brought together for a seamless shopping experience.
        </Typography>
      </Box>

      {/* About Section */}
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack spacing={4}>
            <Box>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Our Story
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Founded in 2022, Skyline Mart was built to make online shopping
                easier, faster, and more enjoyable. We’re passionate about
                curating the best products — from everyday essentials to trendy
                must-haves — all with a focus on quality and trust.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Why Choose Us?
              </Typography>
              <Stack component="ul" spacing={1.2} sx={{ pl: 3 }}>
                <li>
                  <Typography>
                    ✅ Affordable prices & exclusive deals
                  </Typography>
                </li>
                <li>
                  <Typography>
                    ✅ Fast & reliable nationwide shipping
                  </Typography>
                </li>
                <li>
                  <Typography>✅ 24/7 friendly customer support</Typography>
                </li>
                <li>
                  <Typography>
                    ✅ Hassle-free returns & secure checkout
                  </Typography>
                </li>
              </Stack>
            </Box>
            <Button
              variant="outlined"
              color="warning"
              sx={{
                textTransform: "capitalize",
                fontWeight: 500,
                borderRadius: 3,
                px: 2.5,
                "&:hover": {
                  backgroundColor: "goldenrod",
                  color: "#fff",
                  borderColor: "goldenrod",
                },
              }}
              href="/contact"
            >
              Contact Us
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 5,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.02)" },
            }}
          >
            <Image
              src="/ecommerce-optimization.png"
              alt="About us"
              width={600}
              height={400}
              priority
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
