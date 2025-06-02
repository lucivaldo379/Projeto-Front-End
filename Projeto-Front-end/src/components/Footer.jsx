const Footer = () => {
    return (
        <>
        <footer style={{backgroundColor: '#1F1F1F', marginTop: '50px'}}>
            <div style={{display: "flex"}}>
                <div id="secao1">
                    <img src="src/assets/logo-footer.svg" style={{marginLeft:'95px',  marginTop: '50px'}} alt="" />
                    <br /><br />
                    <p style={{color: 'white', marginLeft: '95px'}}>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore.</p>
                   
                    <ul style={{display: 'flex', marginLeft:'45px'}}>
                        <li style={{margin: '18px'}}><img src="src/assets/facebook.svg" alt="" /></li>
                        <li style={{margin: '18px'}}><img src="src/assets/instagram.svg" alt="" /></li>
                        <li style={{margin: '18px'}}><img src="src/assets/twitter.svg" alt="" /></li>
                    </ul>
                </div>

                <div style={{marginLeft:'120px', marginTop: '50px'}}>
                    <h5 style={{color:'white', marginLeft:'30px', marginBottom: '21px'}}>Informações</h5>
                    <ul>
                        <li style={{color:'white',  listStyle: 'none'}}>Sobre Drip Store</li>
                        <li style={{color:'white',  listStyle: 'none'}}>Segurança</li>
                        <li style={{color:'white',  listStyle: 'none'}}>Wishlist</li>
                        <li style={{color:'white',  listStyle: 'none'}}>Blog</li>
                        <li style={{color:'white',  listStyle: 'none'}}>Trabalhe conosco</li>
                        <li style={{color:'white',  listStyle: 'none'}}>Meus Pedidos</li>
                    </ul>
                </div>

                <div style={{marginLeft:'100px', marginTop: '50px'}}>
                    <h5 style={{color:'white', marginLeft:'30px', marginBottom: '21px'}}>Categorias</h5>
                    <ul>
                        <li style={{color:'white',  listStyle: 'none'}}>Camisetas</li>
                        <li style={{color:'white',  listStyle: 'none'}}>Calças</li>
                        <li style={{color:'white',  listStyle: 'none'}}>Bonés</li>
                        <li style={{color:'white',  listStyle: 'none'}}>HeadPhones</li>
                        <li style={{color:'white',  listStyle: 'none'}}>Tênis</li>
                    </ul>
                </div>

                <div style={{marginLeft:'90px', marginTop: '50px'}}>
                    <h5 style={{color:'white', marginLeft:'100px', marginBottom: '21px'}}>Contato</h5>
                    <p style={{color:' white', marginLeft:'100px'}}>Av. Santos Dumont, 1510 - 1 <br /> andar - Aldeota, Fortaleza - <br /> CE, 60150-161</p>
                    <br />
                    <p style={{color:' white', marginLeft:'100px'}}>(85) 3051-3411</p>
                </div>

            </div>
            <hr style={{color:'white', width: '88%', marginLeft:'89px'}}/>
            <div style={{marginBottom: '-20px'}}>
                <p style={{textAlign:'center', backgroundColor:'#1F1F1F', color: '#ffffff', height: '40px' }}>@ 2022 Digital College</p>
            </div>
        </footer>
        </>
    );
}
 
export default Footer;