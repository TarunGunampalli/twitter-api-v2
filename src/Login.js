// import OAuth2Login from 'react-simple-oauth2-login';
import TwitterApi from 'twitter-api-v2';

const onSuccess = (response) => console.log(response);
const onFailure = (response) => console.error(response);
const scopes = ['tweet.read', 'users.read', 'offline.access'];

const Login = () => {
	// const client = new TwitterApi({
	// 	clientId: process.env.REACT_APP_TWITTER_CLIENT_ID,
	// 	clientSecret: process.env.REACT_APP_TWITTER_CLIENT_SECRET,
	// });
	// const { url, codeVerifier, state } = client.generateOAuth2AuthLink(process.env.REACT_APP_REDIRECT_URI, {
	// 	scope: scopes,
	// });

	return (
		// <OAuth2Login
		// 	authorizationUrl='https://twitter.com/i/oauth2/authorize'
		// 	responseType='code'
		// 	clientId={process.env.REACT_APP_TWITTER_CLIENT_ID}
		// 	redirectUri='https://localhost:3000/success'
		// 	scope={scopes.join('%20')}
		// 	isCrossOrigin
		// 	render={({ onClick }) => <button onClick={onClick}>Login with Twitter</button>}
		// 	extraParams={{ state: 'state', code_challenge: 'challenge', code_challenge_method: 'plain' }}
		// 	onSuccess={onSuccess}
		// 	onFailure={onFailure}
		// />
		// <button href={url}></button>
		<div>hello</div>
	);
};

export default Login;
