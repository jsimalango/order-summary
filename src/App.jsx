import './App.css';
import iconMusic from '../public/images/icon-music.svg';
import hero from '../public/images/illustration-hero.svg';
import { Card, Typography, Button } from 'antd';
const { Meta } = Card;
const { Text, Link } = Typography;

function App() {
	return (
		<Card
			style={{
				width: 300,
			}}
			cover={<img alt="hero" src={hero} />}
		>
			<Meta
				title={
					<Text style={{ fontSize: '20px', fontWeight: 'bold' }}>
						Order Summary
					</Text>
				}
				description="You can now listen to millions of songs, audiobooks, and podcasts on any 
  device anywhere you like!"
				style={{
					textAlign: 'center',
					marginBottom: '10px',
					fontWeight: '700',
					fontFamily: 'Red Hat Display',
				}}
			/>
			<div className="annual-plan">
				<img src={iconMusic} alt="music" />
				<div className="price">
					<Text style={{ fontSize: '13px' }}>Annual Plan</Text>
					<Text>$59.99/year</Text>
				</div>
				<div className="change">
					<Link
						href="#"
						underline
						style={{
							color: 'hsl(245, 75%, 52%)',
							fontWeight: '700',
							fontSize: '13px',
						}}
					>
						Change
					</Link>
				</div>
			</div>
			<div className="btn">
				<Button
					type="primary"
					style={{
						backgroundColor: 'hsl(245, 75%, 52%)',
						fontFamily: 'Red Hat Display',
						fontWeight: '700',
					}}
				>
					Proceed to Payment
				</Button>
				<Button
					type="text"
					style={{
						fontFamily: 'Red Hat Display',
						fontWeight: '700',
						color: 'hsl(224, 23%, 55%)',
					}}
				>
					Cancel Order
				</Button>
			</div>
			<div className="attribution">
				Challenge by{' '}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
				>
					Frontend Mentor
				</a>
				. Coded by <a href="#">JSimalango</a>.
			</div>
		</Card>
	);
}

export default App;
