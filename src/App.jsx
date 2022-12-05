import React from 'react';
import {
	Typography,
	AppBar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Toolbar,
	Container,
	CssBaseline,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import useStyles from './styles';

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<PhotoCamera className={classes.icon} />
					<Typography variant='h6'>Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div>
					<Container
						maxWidth='sm'
						className={classes.container}>
						<Typography
							variant='h2'
							align='center'
							color='textPrimary'
							gutterBottom>
							Photo Album
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='textSecondary'
							paragraph>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
							enim optio cupiditate voluptatibus, voluptas eaque id impedit
							deleniti? Accusamus illo facilis, perspiciatis aperiam porro
							laudantium!
						</Typography>
						<div>
							<Grid
								container
								spacing={2}
								justifyContent='center'>
								<Grid item>
									<Button
										variant='contained'
										color='primary'
										className={classes.btn}>
										See My Photos
									</Button>
								</Grid>
								<Grid item>
									<Button
										variant='outlined'
										color='primary'
										className={classes.btn}>
										Secondary Action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container
					className={classes.cardGrid}
					maxWidth='md'>
					<Grid
						container
						spacing={4}>
						{card.map((item) => (
							<Grid
								item
								key={item}
								xs={12}
								sm={6}
								md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image='https://source.unsplash.com/random'
										title='image-title'
									/>
									<CardContent className={classes.CardContent}>
										<Typography
											variant='h5'
											gutterBottom>
											Heading
										</Typography>
										<Typography>
											Lorem ipsum dolor sit amet consectetur.
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size='small'
											color='primary'>
											View
										</Button>
										<Button
											size='small'
											color='primary'>
											Edit
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			<footer className={classes.footer}>
				<Typography
					variant='h6'
					align='center'
					gutterBottom>
					Footer
				</Typography>
				<Typography
					variant='subtitle1'
					align='center'
					color='textSecondary'>
					{' '}
					Copyright Here
				</Typography>
			</footer>
		</>
	);
};

export default App;
