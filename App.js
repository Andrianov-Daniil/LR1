import './App.css';

function App() {
	return (
		<div className='wrapper'>
			<header>
				<div className='headerLeft'>
					<img width={100} height={100} src="/img/logo1.png" />
					<div className='headerInfo'>
						<h1>React Sneakers</h1>
						<p1>Магазин игр</p1>
					</div>
				</div>
				<ul>
					<li>
						<img width={30} height={25} src="/img/basket.png" />
						<span1>
							1204 руб.
						</span1>
					</li>
					<li><img width={30} height={30} src="/img/person.png" /></li>
				</ul>
			</header>
			<h2>Все игры</h2>
			<div className='content'>
				{/* ДОТА */}
				<div className='card'>
					<img width={150} height={150} src='/game/1.png'/>
					<p>Игра для эмо боев</p>
					<div className='price'>
						<div>
							<span2>Цена: </span2>
							<b>3 999 руб.</b>
						</div>
						<button>
							<img width={30} height={30} src='/img/play.png'/>
						</button>
					</div>
				</div>
				{/* КС-ГО */}
				<div className='card'>
					<img width={150} height={150} src='/game/2.png'/>
					<p>ждём Source2</p>
					<div className='price'>
						<div>
							<span2>Цена: </span2>
							<b>3 999 руб.</b>
						</div>
						<button>
							<img width={30} height={30} src='/img/play.png'/>
						</button>
					</div>
				</div>
				{/* APEX */}
				<div className='card'>
					<img width={150} height={150} src='/game/3.png'/>
					<p>PUBG на максималках</p>
					<div className='price'>
						<div>
							<span2>Цена: </span2>
							<b>3 999 руб.</b>
						</div>
						<button>
							<img width={30} height={30} src='/img/play.png'/>
						</button>
					</div>
				</div>
				{/* Ведьмак */}
				<div className='card'>
					<img width={150} height={150} src='/game/4.png'/>
					<p>Волки делают ауф</p>
					<div className='price'>
						<div>
							<span2>Цена: </span2>
							<b>3 999 руб.</b>
						</div>
						<button>
							<img width={30} height={30} src='/img/play.png'/>
						</button>
					</div>
				</div>
			</div>
    	</div>
    );
}

export default App;
