import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, CssBaseline, Card, CardActionArea, CardContent, Avatar, InputBase, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import NoteIcon from '@mui/icons-material/Note';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes';
import Documents from './components/Documents';
import MoveEditor from './components/MoveEditor';
import WalletConnect from './components/WalletConnect';
import MyUploads from './components/MyUploads';

const drawerWidth = 220;

const NAV_ITEMS = [
  { key: 'notes', label: 'Notes', icon: <NoteIcon /> },
  { key: 'documents', label: 'Documents', icon: <DescriptionIcon /> },
  { key: 'move', label: 'Move Editor', icon: <CodeIcon /> },
  { key: 'wallet', label: 'Wallet Connect', icon: <AccountCircle /> },
  { key: 'uploads', label: 'My Uploads', icon: <CloudUploadIcon /> },
];

function App() {
  const [view, setView] = useState('notes');
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => setDrawerOpen(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Avatar src={logo} sx={{ mr: 2 }} />
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Padia
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.15)', px: 2, borderRadius: 1, mr: 2 }}>
            <SearchIcon sx={{ mr: 1 }} />
            <InputBase placeholder="Search…" sx={{ color: 'inherit' }} />
          </Box>
          <Button color="inherit" variant="outlined" sx={{ mr: 2 }}>Connect Wallet</Button>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar />
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem button selected={view === item.key} key={item.key} onClick={() => { setView(item.key); setDrawerOpen(false); }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        {/* Home dashboard inspired by Google Docs */}
        {view === 'notes' && <Notes />}
        {view === 'documents' && <Documents />}
        {view === 'move' && <MoveEditor />}
        {view === 'wallet' && <WalletConnect />}
        {view === 'uploads' && <MyUploads />}
        {view === 'home' && (
          <>
            <Typography variant="h5" sx={{ mb: 2 }}>Start a new document</Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item>
                <Card sx={{ width: 160 }}>
                  <CardActionArea>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
                      <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, mb: 2 }}>
                        <NoteIcon fontSize="large" />
                      </Avatar>
                      <Typography>Blank Note</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ width: 160 }}>
                  <CardActionArea>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
                      <Avatar sx={{ bgcolor: 'secondary.main', width: 56, height: 56, mb: 2 }}>
                        <DescriptionIcon fontSize="large" />
                      </Avatar>
                      <Typography>Blank Document</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ width: 160 }}>
                  <CardActionArea>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
                      <Avatar sx={{ bgcolor: 'info.main', width: 56, height: 56, mb: 2 }}>
                        <CodeIcon fontSize="large" />
                      </Avatar>
                      <Typography>Blank Move File</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ mb: 2 }}>Recent documents</Typography>
            <Grid container spacing={2}>
              {/* Placeholder for recent items */}
              <Grid item>
                <Card sx={{ width: 220, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography color="text.secondary">No recent documents</Typography>
                </Card>
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </Box>
  );
}

export default App;
