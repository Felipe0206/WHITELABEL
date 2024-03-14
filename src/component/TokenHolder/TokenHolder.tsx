"use client"
import React from 'react';
import styles from './TokenHolder.module.css'; // Importa los estilos CSS
import Image from 'next/image';

const TokenHolder: React.FC = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.imageContainer}>
            <Image
              src="https://3.bp.blogspot.com/--lFQd4zN4gw/Vw7lXbMy_TI/AAAAAAAABfI/NZcf-9m_NEs6Vc57yd28dAs7EEaiJYYXgCLcB/s1600/5._Goldin_Finance_117_%25C2%25A9_P___T_Group.jpg"
              alt="propiedad"
              width={170}
              height={100}
              className={styles.imageWithBorderRadius} // Aplica la clase para el radio de borde
            />
          </div>

          <div className={styles.propertyInfo}>
            <h2 className={styles.propertyName}>Nombre de la propiedad</h2>
            <div className={styles.propertyAddress}>
              <img src="/#" alt="icono" className={styles.propertyImage} />
              <p className={styles.addressText}>Dirección de la propiedad</p>
            </div>

            <p className={styles.tokenPrice}>Precio del token: 500 UDS</p>
          </div>

          <div className={styles.tokenInfo}>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Mis Tokens</p>
              <span className={styles.tokenValue}>10</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rentabilidad Estimada</p>
              <span className={styles.tokenValue}>10%</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rendimientos Acumulados</p>
              <span className={styles.tokenValue}>10k</span>

            </div>


          </div>

          <div className={styles.buyTokensButton}>
            <button className={styles.buyButton}>COMPRAR MÁS TOKEN</button>
          </div>

        </div>

        <div className={styles.saleInfo}>
          <div className={styles.tokensBought}><p className={styles.tokensBoughtText}>Compraste solo 30 tokens.</p></div>

          <div className={styles.tokenSaleOptions}>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿Cuántos tokens deseas vender?</button></div>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿A qué precio te gustaría vender?</button></div>
            <button className={styles.sellTokensButton}>SOLICITAR REVENTA</button>
          </div>
        </div>
      </div>


      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.imageContainer}>
            <Image
              src="https://3.bp.blogspot.com/--lFQd4zN4gw/Vw7lXbMy_TI/AAAAAAAABfI/NZcf-9m_NEs6Vc57yd28dAs7EEaiJYYXgCLcB/s1600/5._Goldin_Finance_117_%25C2%25A9_P___T_Group.jpg"
              alt="propiedad"
              width={170}
              height={100}
              className={styles.imageWithBorderRadius} // Aplica la clase para el radio de borde
            />
          </div>

          <div className={styles.propertyInfo}>
            <h2 className={styles.propertyName}>Nombre de la propiedad</h2>
            <div className={styles.propertyAddress}>
              <img src="/#" alt="icono" className={styles.propertyImage} />
              <p className={styles.addressText}>Dirección de la propiedad</p>
            </div>

            <p className={styles.tokenPrice}>Precio del token: 500 UDS</p>
          </div>

          <div className={styles.tokenInfo}>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Mis Tokens</p>
              <span className={styles.tokenValue}>10</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rentabilidad Estimada</p>
              <span className={styles.tokenValue}>10%</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rendimientos Acumulados</p>
              <span className={styles.tokenValue}>10k</span>

            </div>


          </div>

          <div className={styles.buyTokensButton}>
            <button className={styles.buyButton}>COMPRAR MÁS TOKEN</button>
          </div>

        </div>

        <div className={styles.saleInfo}>
          <div className={styles.tokensBought}><p className={styles.tokensBoughtText}>Compraste solo 30 tokens.</p></div>

          <div className={styles.tokenSaleOptions}>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿Cuántos tokens deseas vender?</button></div>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿A qué precio te gustaría vender?</button></div>
            <button className={styles.sellTokensButton}>SOLICITAR REVENTA</button>
          </div>
        </div>
      </div>



      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.imageContainer}>
            <Image
              src="https://3.bp.blogspot.com/--lFQd4zN4gw/Vw7lXbMy_TI/AAAAAAAABfI/NZcf-9m_NEs6Vc57yd28dAs7EEaiJYYXgCLcB/s1600/5._Goldin_Finance_117_%25C2%25A9_P___T_Group.jpg"
              alt="propiedad"
              width={170}
              height={100}
              className={styles.imageWithBorderRadius} // Aplica la clase para el radio de borde
            />
          </div>

          <div className={styles.propertyInfo}>
            <h2 className={styles.propertyName}>Nombre de la propiedad</h2>
            <div className={styles.propertyAddress}>
              <img src="/#" alt="icono" className={styles.propertyImage} />
              <p className={styles.addressText}>Dirección de la propiedad</p>
            </div>

            <p className={styles.tokenPrice}>Precio del token: 500 UDS</p>
          </div>

          <div className={styles.tokenInfo}>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Mis Tokens</p>
              <span className={styles.tokenValue}>10</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rentabilidad Estimada</p>
              <span className={styles.tokenValue}>10%</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rendimientos Acumulados</p>
              <span className={styles.tokenValue}>10k</span>

            </div>


          </div>

          <div className={styles.buyTokensButton}>
            <button className={styles.buyButton}>COMPRAR MÁS TOKEN</button>
          </div>

        </div>

        <div className={styles.saleInfo}>
          <div className={styles.tokensBought}><p className={styles.tokensBoughtText}>Compraste solo 30 tokens.</p></div>

          <div className={styles.tokenSaleOptions}>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿Cuántos tokens deseas vender?</button></div>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿A qué precio te gustaría vender?</button></div>
            <button className={styles.sellTokensButton}>SOLICITAR REVENTA</button>
          </div>
        </div>
      </div>



      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.imageContainer}>
            <Image
              src="https://3.bp.blogspot.com/--lFQd4zN4gw/Vw7lXbMy_TI/AAAAAAAABfI/NZcf-9m_NEs6Vc57yd28dAs7EEaiJYYXgCLcB/s1600/5._Goldin_Finance_117_%25C2%25A9_P___T_Group.jpg"
              alt="propiedad"
              width={170}
              height={100}
              className={styles.imageWithBorderRadius} // Aplica la clase para el radio de borde
            />
          </div>

          <div className={styles.propertyInfo}>
            <h2 className={styles.propertyName}>Nombre de la propiedad</h2>
            <div className={styles.propertyAddress}>
              <img src="/#" alt="icono" className={styles.propertyImage} />
              <p className={styles.addressText}>Dirección de la propiedad</p>
            </div>

            <p className={styles.tokenPrice}>Precio del token: 500 UDS</p>
          </div>

          <div className={styles.tokenInfo}>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Mis Tokens</p>
              <span className={styles.tokenValue}>10</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rentabilidad Estimada</p>
              <span className={styles.tokenValue}>10%</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rendimientos Acumulados</p>
              <span className={styles.tokenValue}>10k</span>

            </div>


          </div>

          <div className={styles.buyTokensButton}>
            <button className={styles.buyButton}>COMPRAR MÁS TOKEN</button>
          </div>

        </div>

        <div className={styles.saleInfo}>
          <div className={styles.tokensBought}><p className={styles.tokensBoughtText}>Compraste solo 30 tokens.</p></div>

          <div className={styles.tokenSaleOptions}>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿Cuántos tokens deseas vender?</button></div>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿A qué precio te gustaría vender?</button></div>
            <button className={styles.sellTokensButton}>SOLICITAR REVENTA</button>
          </div>
        </div>
      </div>




      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.imageContainer}>
            <Image
              src="https://3.bp.blogspot.com/--lFQd4zN4gw/Vw7lXbMy_TI/AAAAAAAABfI/NZcf-9m_NEs6Vc57yd28dAs7EEaiJYYXgCLcB/s1600/5._Goldin_Finance_117_%25C2%25A9_P___T_Group.jpg"
              alt="propiedad"
              width={170}
              height={100}
              className={styles.imageWithBorderRadius} // Aplica la clase para el radio de borde
            />
          </div>

          <div className={styles.propertyInfo}>
            <h2 className={styles.propertyName}>Nombre de la propiedad</h2>
            <div className={styles.propertyAddress}>
              <img src="/#" alt="icono" className={styles.propertyImage} />
              <p className={styles.addressText}>Dirección de la propiedad</p>
            </div>

            <p className={styles.tokenPrice}>Precio del token: 500 UDS</p>
          </div>

          <div className={styles.tokenInfo}>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Mis Tokens</p>
              <span className={styles.tokenValue}>10</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rentabilidad Estimada</p>
              <span className={styles.tokenValue}>10%</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rendimientos Acumulados</p>
              <span className={styles.tokenValue}>10k</span>

            </div>


          </div>

          <div className={styles.buyTokensButton}>
            <button className={styles.buyButton}>COMPRAR MÁS TOKEN</button>
          </div>

        </div>

        <div className={styles.saleInfo}>
          <div className={styles.tokensBought}><p className={styles.tokensBoughtText}>Compraste solo 30 tokens.</p></div>

          <div className={styles.tokenSaleOptions}>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿Cuántos tokens deseas vender?</button></div>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿A qué precio te gustaría vender?</button></div>
            <button className={styles.sellTokensButton}>SOLICITAR REVENTA</button>
          </div>
        </div>
      </div>





      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.imageContainer}>
            <Image
              src="https://3.bp.blogspot.com/--lFQd4zN4gw/Vw7lXbMy_TI/AAAAAAAABfI/NZcf-9m_NEs6Vc57yd28dAs7EEaiJYYXgCLcB/s1600/5._Goldin_Finance_117_%25C2%25A9_P___T_Group.jpg"
              alt="propiedad"
              width={170}
              height={100}
              className={styles.imageWithBorderRadius} // Aplica la clase para el radio de borde
            />
          </div>

          <div className={styles.propertyInfo}>
            <h2 className={styles.propertyName}>Nombre de la propiedad</h2>
            <div className={styles.propertyAddress}>
              <img src="/#" alt="icono" className={styles.propertyImage} />
              <p className={styles.addressText}>Dirección de la propiedad</p>
            </div>

            <p className={styles.tokenPrice}>Precio del token: 500 UDS</p>
          </div>

          <div className={styles.tokenInfo}>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Mis Tokens</p>
              <span className={styles.tokenValue}>10</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rentabilidad Estimada</p>
              <span className={styles.tokenValue}>10%</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rendimientos Acumulados</p>
              <span className={styles.tokenValue}>10k</span>

            </div>


          </div>

          <div className={styles.buyTokensButton}>
            <button className={styles.buyButton}>COMPRAR MÁS TOKEN</button>
          </div>

        </div>

        <div className={styles.saleInfo}>
          <div className={styles.tokensBought}><p className={styles.tokensBoughtText}>Compraste solo 30 tokens.</p></div>

          <div className={styles.tokenSaleOptions}>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿Cuántos tokens deseas vender?</button></div>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿A qué precio te gustaría vender?</button></div>
            <button className={styles.sellTokensButton}>SOLICITAR REVENTA</button>
          </div>
        </div>
      </div>



      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.imageContainer}>
            <Image
              src="https://3.bp.blogspot.com/--lFQd4zN4gw/Vw7lXbMy_TI/AAAAAAAABfI/NZcf-9m_NEs6Vc57yd28dAs7EEaiJYYXgCLcB/s1600/5._Goldin_Finance_117_%25C2%25A9_P___T_Group.jpg"
              alt="propiedad"
              width={170}
              height={100}
              className={styles.imageWithBorderRadius} // Aplica la clase para el radio de borde
            />
          </div>

          <div className={styles.propertyInfo}>
            <h2 className={styles.propertyName}>Nombre de la propiedad</h2>
            <div className={styles.propertyAddress}>
              <img src="/#" alt="icono" className={styles.propertyImage} />
              <p className={styles.addressText}>Dirección de la propiedad</p>
            </div>

            <p className={styles.tokenPrice}>Precio del token: 500 UDS</p>
          </div>

          <div className={styles.tokenInfo}>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Mis Tokens</p>
              <span className={styles.tokenValue}>10</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rentabilidad Estimada</p>
              <span className={styles.tokenValue}>10%</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rendimientos Acumulados</p>
              <span className={styles.tokenValue}>10k</span>

            </div>


          </div>

          <div className={styles.buyTokensButton}>
            <button className={styles.buyButton}>COMPRAR MÁS TOKEN</button>
          </div>

        </div>

        <div className={styles.saleInfo}>
          <div className={styles.tokensBought}><p className={styles.tokensBoughtText}>Compraste solo 30 tokens.</p></div>

          <div className={styles.tokenSaleOptions}>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿Cuántos tokens deseas vender?</button></div>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿A qué precio te gustaría vender?</button></div>
            <button className={styles.sellTokensButton}>SOLICITAR REVENTA</button>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.imageContainer}>
            <Image
              src="https://3.bp.blogspot.com/--lFQd4zN4gw/Vw7lXbMy_TI/AAAAAAAABfI/NZcf-9m_NEs6Vc57yd28dAs7EEaiJYYXgCLcB/s1600/5._Goldin_Finance_117_%25C2%25A9_P___T_Group.jpg"
              alt="propiedad"
              width={170}
              height={100}
              className={styles.imageWithBorderRadius} // Aplica la clase para el radio de borde
            />
          </div>

          <div className={styles.propertyInfo}>
            <h2 className={styles.propertyName}>Nombre de la propiedad</h2>
            <div className={styles.propertyAddress}>
              <img src="/#" alt="icono" className={styles.propertyImage} />
              <p className={styles.addressText}>Dirección de la propiedad</p>
            </div>

            <p className={styles.tokenPrice}>Precio del token: 500 UDS</p>
          </div>

          <div className={styles.tokenInfo}>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Mis Tokens</p>
              <span className={styles.tokenValue}>10</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rentabilidad Estimada</p>
              <span className={styles.tokenValue}>10%</span>

            </div>
            <div className={styles.tokenDetails}> <p className={styles.tokenLabel}>Rendimientos Acumulados</p>
              <span className={styles.tokenValue}>10k</span>

            </div>


          </div>

          <div className={styles.buyTokensButton}>
            <button className={styles.buyButton}>COMPRAR MÁS TOKEN</button>
          </div>

        </div>

        <div className={styles.saleInfo}>
          <div className={styles.tokensBought}><p className={styles.tokensBoughtText}>Compraste solo 30 tokens.</p></div>

          <div className={styles.tokenSaleOptions}>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿Cuántos tokens deseas vender?</button></div>
            <div className={styles.tokenOption}><img src="" alt="" className={styles.tokenImage} /> <button className={styles.tokenButton}>¿A qué precio te gustaría vender?</button></div>
            <button className={styles.sellTokensButton}>SOLICITAR REVENTA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenHolder;
