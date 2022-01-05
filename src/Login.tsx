// import OAuth2Login from 'react-simple-oauth2-login';
import { Button } from '@mui/material';
import TwitterApi from 'twitter-api-v2';

const scopes = ['tweet.read', 'users.read', 'offline.access'];

const Login = () => {
	const client = new TwitterApi({
		clientId: process.env.REACT_APP_TWITTER_CLIENT_ID,
		clientSecret: process.env.REACT_APP_TWITTER_CLIENT_SECRET,
	});
	const { url, codeVerifier, state } = client.generateOAuth2AuthLink(process.env.REACT_APP_REDIRECT_URI, {
		scope: scopes,
	});

	return (
		<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<Button href={url} variant='contained'>
				Login with Twitter
			</Button>
		</div>
	);
};

export default Login;
