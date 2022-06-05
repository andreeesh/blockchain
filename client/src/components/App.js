import React, { Component } from 'react';
import Blocks from './Blocks';

class App extends Component {
	state = { walletInfo: {} };

	componentDidMount() { 
		fetch('http://localhost:3001/api/wallet-info')
			.then(response => response.json())
			.then(json => this.setState({ walletInfo: json }));
	}

	render() {
		const { address, balance } = this.state.walletInfo;
		return (
			<div className='App'>
				<div className='WalletInfo'>
					<div>Address: {address}</div>
					<div>Balance: {balance}</div>
					<br />
				</div>
				<Blocks />
			</div>
		);
	}
}

export default App;