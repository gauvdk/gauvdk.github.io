import { ContainerComponent } from '../shared/container.component.jsx';

const MapComponent = ({ className = '' }) => {
    return <div className={'card ' + className} style={{ width: '100%' }}>
        <iframe src="https://www.google.com/maps/d/embed?mid=1Lo-6WJ4PTdel36xu_ruBH3LKNRXnuSyV"
            style={{ display: 'block', width: '100%', border: 'none' }}></iframe>
    </div>
};

export const FindSpotPage = () => {
    return <div className="home">
        <ContainerComponent>
            <div class="card transparent">
                <div class="card-content">
                    <span class="card-title grey-text text-darken-3">Spots de Skim</span>
										<p style={{marginTop: '2%'}}>Voilà une carte des meilleurs spots de skimboard en France</p>
										<p style={{marginTop: '2%'}}>Tous ces spots ont été testé et approuvé par un skimboarder habitué du spot, pour pouvoir vous donner un max d'infos
											sur les conditions propices à une session de rêve sur ce spot</p>
										<p style={{marginTop: '2%'}}>Envie de partager votre spot ?</p>
                </div>
                <div class="card-action">
                    <a className="cyan-text darken-3" href="https://forms.gle/gu5aRTjPacEMcF427" target="_blank">Suggérer un spot</a>
								</div>
            </div>
						<MapComponent className='not-on-tablet' />
        </ContainerComponent>
				<ContainerComponent>
            <MapComponent className='only-on-tablet' />
        </ContainerComponent>
    </div>
}
