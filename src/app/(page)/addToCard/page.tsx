"use client";

import CheckoutSummary from "@/components/CheckoutSummary";
import { useCart } from "@/context/contextPage";
import { ProductTypes } from "@/types/types";
import { DeleteForever } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import { useState } from "react";

const AddToCard = () => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const { getLocal, setCartItems, setCount } = useCart();

  const items = getLocal();
  let jsonCart: ProductTypes[] = items ? JSON.parse(items) : [];

  const handleQuantityChange = (id: number, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) + change, 1),
    }));
  };

  const handleCartRemove = (id: number) => {
    const updated = jsonCart.filter((item) => item.id !== id);
    jsonCart = updated;
    if (updated.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(updated));
    }
    setCount(updated.length);
    setCartItems(updated);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        Your Cart ({jsonCart.length} item{jsonCart.length !== 1 && "s"})
      </Typography>
      <Grid container spacing={3}>
        {jsonCart.map((item) => (
          <Grid item xs={12} key={item.id}>
            <Card sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  width: 100,
                  height: 100,
                  objectFit: "contain",
                  borderRadius: 2,
                }}
              />

              <CardContent sx={{ flex: 1 }}>
                <Typography fontWeight="bold" fontSize="18px" gutterBottom>
                  {item.title}
                </Typography>

                <Box display="flex" alignItems="center" gap={2}>
                  <Typography variant="body1" fontWeight="bold">
                    ${item.price}
                  </Typography>

                  <Box display="flex" alignItems="center" gap={1}>
                    <Button
                      size="small"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </Button>
                    <Typography width="32px" textAlign="center">
                      {quantities[item.id] || 1}
                    </Typography>
                    <Button
                      size="small"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </Button>
                  </Box>

                  <Typography variant="body2" fontWeight="bold">
                    Total: ${item.price * (quantities[item.id] || 1)}
                  </Typography>
                </Box>
              </CardContent>

              <IconButton
                onClick={() => handleCartRemove(item.id)}
                color="error"
              >
                <DeleteForever />
              </IconButton>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 4 }} />
      <CheckoutSummary
        jsonCart={jsonCart.map((item) => ({
          ...item,
          quantity: quantities[item.id] || 1,
        }))}
      />{" "}
    </Container>
  );
};

export default AddToCard;
