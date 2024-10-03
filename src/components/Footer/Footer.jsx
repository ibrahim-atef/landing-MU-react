import { Box, Typography, Link, IconButton } from "@mui/material";
import {   GitHub,LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: 3,
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Connect with me @LEVI
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
  
        <IconButton
          component={Link}
          href="https://github.com/ibrahim-atef"
          target="_blank"
          color="inherit"
        >
          <GitHub />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/ibrahim-atef-6816a91b0/"
          target="_blank"
          color="inherit"
        >
          <LinkedIn />
        </IconButton>
      </Box>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} LEVI. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
