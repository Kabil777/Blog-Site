import * as React from 'react';
import pythonImage from '../../assets/1_rSdN-ErriXyyU45XH96RMA 1.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { FaPython } from 'react-icons/fa';
import { AiOutlineKubernetes } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: '17rem', maxHeight: '23.5rem', display: 'flex', flexDirection: 'column', boxShadow: 'none', border: '0.0625rem solid #ccc' }}>
      <CardMedia
        sx={{
          width: '17rem',
          height: '17.25rem',
          objectFit: 'contain',
        }}
        image={pythonImage}
        title="Python Image"
      />
      <CardContent sx={{ flexGrow: 1, paddingTop: 0, paddingBottom: 0, marginBottom: '0.625rem' }}>
        <Typography
          gutterBottom
          variant="h8"
          component="div"
          sx={{
            paddingTop: '0.625rem',
            fontWeight: 'bold',
            fontSize: '1.0625rem',
            marginBottom: '0',
            fontFamily: "'Roboto', sans-serif",
            textAlign: 'left',
          }}
        >
          PYTHON
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'black',
            paddingTop: '0.4375rem',
            fontWeight: 'bold',
            fontSize: '0.85rem',
            textAlign: 'left',
          }}
        >
          DATA STRUCTURES | BIG DATA
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingTop: '0.3125rem', paddingBottom: 0, display: 'flex', justifyContent: 'space-between', marginTop: '0.1875rem' }}>
        <Button
          size="small"
          startIcon={<FaPython style={{ fontSize: '0.875rem' }} />}
          sx={{
            marginBottom: '0.0625rem',
            width: '5.25rem',
            height: '1.375rem',
            fontSize: '0.6875rem',
            backgroundColor: '#EEF5FF',
          }}
        >
          Python
        </Button>
        <Button
          size="small"
          startIcon={<AiOutlineKubernetes style={{ fontSize: '0.875rem' }} />}
          sx={{
            marginBottom: '0.0625rem',
            width: '9.375rem',
            height: '1.375rem',
            fontSize: '0.6875rem',
            backgroundColor: '#EEF5FF',
          }}
        >
          Data Structures
        </Button>
      </CardActions>
      <CardActions sx={{ paddingTop: 0, marginTop: '1rem' }}> {/* Increased marginTop */}
        <Button
          size="small"
          startIcon={<IoMdAdd style={{ fontSize: '0.875rem' }} />}
          sx={{
            fontSize: '0.6875rem',
            width: '5.25rem',
            height: '1.5rem',
            color: '#04BF8A',
            backgroundColor: '#CAFDCA',
          }}
        >
          Follow
        </Button>
      </CardActions>
    </Card>
  );
}

