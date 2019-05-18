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
						<div className="item versusDisplay">
							<div className="statsContainer">
								<VersusDisplayer playerNumber={this.props.playerNumber} players={this.props.players}/>
							</div>
						</div>
						<div className="item trophiesNumber">
							<div className="titreSection">Nombre de trophées</div>
							<div className="statsContainer">
									<ColumnChart
										trophies={this.props.players.map(player => player.datas.trophies )}
										playerName={this.props.players.map(player => player.datas.name)}
									/>
							</div>
						</div>
						<div className="item maxTrophies">
							<div className="titreSection">Nombre de trophées maximums</div>
							<div className="statsContainer">
									<ColumnChart
										maxTrophies={this.props.players.map(player => player.datas.stats.maxTrophies )}
										playerName={this.props.players.map(player => player.datas.name)}
									/>
							</div>
						</div>
						<div className="item cardLevel">
							<div className="titreSection">Niveau des cartes</div>
							<div className="statsContainer">
									<StackedBar
										players={this.props.players}
									/>
							</div>
						</div>
						<div className="item threeCrownWins">
							<div className="titreSection">Combats à trois étoiles gagnés</div>
							<div className="statsContainer">
								<ColumnChart
									threeCrownWins={this.props.players.map(player => player.datas.stats.threeCrownWins )}
									playerName={this.props.players.map(player => player.datas.name)}
								/>
							</div>
						</div>
						<div className="item clanCardCollected">
							<div className="titreSection">Cartes de clans collectées</div>
							<div className="statsContainer">
								<ColumnChart
									clanCardsCollected={this.props.players.map(player => player.datas.stats.clanCardsCollected )}
									playerName={this.props.players.map(player => player.datas.name)}
								/>
							</div>
						</div>
						<div className="item winrateSection">
							<div className="titreSection">Winrate</div>
							<WinratePieList
								players={this.props.players}
							/>
						</div>
						<div className="item preferedCard">
							<div className="titreSection">Carte préférée</div>
							<div className="statsContainer">
								<FavoriteCardList
									players={this.props.players}
								/>
							</div>
						</div>
						<div className="item cardDiscovered">
							<div className="titreSection">Nombre de cartes découvertes</div>
							<div className="statsContainer">
								<ColumnChart
									cardsFound={this.props.players.map(player => player.datas.stats.cardsFound )}
									playerName={this.props.players.map(player => player.datas.name)}
								/>
							</div>
						</div>
						<div className="item challengeMaxWin">
							<div className="titreSection">Nombre de victoires maximales dans un challenge</div>
							<div className="statsContainer">
								<ColumnChart
									cardsFound={this.props.players.map(player => player.datas.stats.challengeMaxWins )}
									playerName={this.props.players.map(player => player.datas.name)}
								/>
							</div>
						</div>
						<div className="item currentDeck">
							<div className="titreSection">Deck actuel</div>
							<div className="statsContainer">
								<CurrentDeckList
									players={this.props.players}
								/>
							</div>
						</div>
					</div>
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
