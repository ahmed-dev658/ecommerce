"use client";
import { use, useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  CardMedia,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { useCart } from "@/context/contextPage";
import { ProductType } from "@/types/types";

const MainProduct = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch product", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {loading ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "60vh" }}
        >
          <CircularProgress />
        </Grid>
      ) : product ? (
        <Grid container spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  height: 400,
                  objectFit: "contain",
                  p: 2,
                  backgroundColor: "#f5f5f5",
                }}
              />
            </Card>
          </Grid>

          {/* Info Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              {product.title}
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Category: {product.category}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" color="primary">
              ${product.price.toFixed(2)}
            </Typography>

            <Typography variant="body1" sx={{ mt: 2 }}>
              {product.description}
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Button
                onClick={() => addToCart(product)}
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6" color="error">
          Product not found
        </Typography>
      )}
    </Container>
  );
};

export default MainProduct;
