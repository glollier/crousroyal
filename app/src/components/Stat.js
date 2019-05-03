import React, { Component } from 'react';
import { connect } from 'react-redux'
import ColumnChart from './vues/ColumnChart';
import WinratePieList from './vues/WinratePieList'
import StackedBar from './vues/StackedBar'
import FavoriteCardList from './vues/FavoriteCardList'
import CurrentDeckList from './vues/CurrentDeckList'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Stat.css';
import Header from './vues/Header'
import Footer from './vues/Footer'
import VersusDisplayer from './vues/VersusDisplayer'
import { Redirect} from 'react-router-dom'

class Stat extends Component {
render() {
	return (
		this.props.playersAreValid
		? (
				<div>
					<Header />
					<div className="statsContent">
						<div className="item">
							<div className="statsContainer">
								<VersusDisplayer playerNumber={this.props.playerNumber} players={this.props.players}/>
							</div>
						</div>
						<div className="item">
							<div className="titreSection">Winrate</div>
							<WinratePieList
								players={this.props.players}
							/>
						</div>
						<div className="item">
							<div className="titreSection">Niveau des cartes</div>
							<div className="statsContainer">
									<StackedBar
										players={this.props.players}
									/>
							</div>
						</div>
						<div className="item">
							<div className="titreSection">Nombre de trophées</div>
							<div className="statsContainer">
									<ColumnChart
										trophies={this.props.players.map(player => player.datas.trophies )}
										playerName={this.props.players.map(player => player.datas.name)}
									/>
							</div>
						</div>
						<div className="item">
							<div className="titreSection">Nombre de trophées maximums</div>
							<div className="statsContainer">
									<ColumnChart
										maxTrophies={this.props.players.map(player => player.datas.stats.maxTrophies )}
										playerName={this.props.players.map(player => player.datas.name)}
									/>
							</div>
						</div>
						<div className="item">
							<div className="titreSection">Carte préférée</div>
							<div className="statsContainer">
								<FavoriteCardList
									players={this.props.players}
								/>
							</div>
						</div>
						<div className="item">
							<div className="titreSection">Deck actuel</div>
							<div className="statsContainer">
								<CurrentDeckList
									players={this.props.players}
								/>
							</div>
						</div>
						<div className="item">
							<div className="titreSection">Combats à trois étoiles gagnés</div>
							<div className="statsContainer">
								<ColumnChart
									threeCrownWins={this.props.players.map(player => player.datas.stats.threeCrownWins )}
									playerName={this.props.players.map(player => player.datas.name)}
								/>
							</div>
						</div>
						<div className="item">
							<div className="titreSection">Nombre de cartes découvertes</div>
							<div className="statsContainer">
								<ColumnChart
									clanCardsCollected={this.props.players.map(player => player.datas.stats.clanCardsCollected )}
									playerName={this.props.players.map(player => player.datas.name)}
								/>
							</div>
						</div>
						<div className="item">
							<div className="titreSection">Cartes de clans collectées</div>
							<div className="statsContainer">
								<ColumnChart
									cardsFound={this.props.players.map(player => player.datas.stats.cardsFound )}
									playerName={this.props.players.map(player => player.datas.name)}
								/>
							</div>
						</div>
					</div>
					<div><pre>{JSON.stringify(this.props.players, null, 2) }</pre></div>
					<Footer />
				</div>
			)
		: <Redirect to="/" />
	)
}


}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Stat)
