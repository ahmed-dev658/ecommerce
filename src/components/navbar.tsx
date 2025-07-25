"use client";

import { useCart } from "@/context/contextPage";
import { ShoppingCart } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { count } = useCart();
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const local = localStorage.getItem("cart");
    if (local) {
      setCart(JSON.parse(local));
    }
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        width: "100%",
        borderBottom: "1px solid #ddd",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          py: 2,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "goldenrod",
            cursor: "pointer",
            fontFamily: "monospace",
            letterSpacing: 1.2,
          }}
          onClick={() => router.push("/")}
        >
          DevStore
        </Typography>

        {/* Nav Links */}
        <Box sx={{ display: "flex", gap: 1.5 }}>
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Products", path: "/products" },
            { label: "contact", path: "/contact" },
          ].map((item) => (
            <Button
              key={item.path}
              onClick={() => router.push(item.path)}
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
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Cart Icon */}
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={() => router.push("/addToCard")}
            sx={{ color: "goldenrod", position: "relative" }}
          >
            <ShoppingCart sx={{ fontSize: 28 }} />
            {count > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  top: -5,
                  right: -5,
                  backgroundColor: "crimson",
                  color: "#fff",
                  borderRadius: "50%",
                  width: 20,
                  height: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  boxShadow: "0 0 0 2px white",
                }}
              >
                {count}
              </Box>
            )}
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
