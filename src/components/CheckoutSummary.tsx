import React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  TextField,
  Paper,
} from "@mui/material";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CheckoutSummaryProps {
  jsonCart: CartItem[];
}

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ jsonCart }) => {
  const subtotal = jsonCart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const taxRate = 0.1; // 10%
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {jsonCart.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          Your cart is empty.
        </Typography>
      ) : (
        jsonCart.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <Box>
              <Typography fontWeight={500}>{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                Qty: {item.quantity || 1}
              </Typography>
            </Box>
            <Typography fontWeight={600}>
              ${(item.price * (item.quantity || 1)).toFixed(2)}
            </Typography>
          </Box>
        ))
      )}

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography>Subtotal:</Typography>
        <Typography>${subtotal.toFixed(2)}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography>Tax (10%):</Typography>
        <Typography>${tax.toFixed(2)}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography fontWeight={600}>Total:</Typography>
        <Typography fontWeight={600}>${total.toFixed(2)}</Typography>
      </Box>

      <TextField
        fullWidth
        placeholder="Add Coupon"
        variant="outlined"
        size="small"
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          paddingY: 1.2,
          fontWeight: 600,
          fontSize: "1rem",
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "#115293",
          },
        }}
      >
        Checkout
      </Button>
    </Paper>
  );
};

export default CheckoutSummary;
