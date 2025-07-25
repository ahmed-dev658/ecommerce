"use client";
import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  CardMedia,
  Button,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";

const Main = ({ prodMaxLength }: { prodMaxLength?: string }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const API = "https://fakestoreapi.com/products";

  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const limitedProducts = prodMaxLength
        ? data.slice(0, parseInt(prodMaxLength))
        : data;
      setProducts(limitedProducts);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 6, paddingBottom: 8 }}>
      {loading ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "80vh" }}
        >
          <CircularProgress color="warning" />
        </Grid>
      ) : (
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                onClick={() => router.push(`/product/${product.id}`)}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer",
                  borderRadius: 3,
                  boxShadow: 3,
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    padding: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 180,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      maxHeight: "100%",
                      objectFit: "contain",
                      width: "auto",
                    }}
                  />
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    noWrap
                    gutterBottom
                  >
                    {product.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      height: 40,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {product.description}
                  </Typography>

                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" color="goldenrod">
                      ${product.price}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        fontStyle: "italic",
                        textTransform: "capitalize",
                      }}
                    >
                      {product.category}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Main;
