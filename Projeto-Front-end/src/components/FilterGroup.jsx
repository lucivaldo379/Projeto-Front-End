const FilterGroup = () => {
    return ( 
        <>
        <div style={{display: "flex", justifyContent: "space-between", marginTop: '60px'}}>
        <h5 style={{marginLeft:'115px'}}><b>Resultado para "Tênis" -</b> 395 produtos</h5>
        <div style={{display: 'flex', marginRight: '115px'}}>
            <label for="sort" class="form-label" style={{marginRight: '7px'}}>Ordenar por: </label>
            <select id="sort" class="form-select" style={{width: '180px', height: '33px'}}>
            <option value="relevantes">Mais relevantes</option>
            <option value="preco_asc">Menor preço</option>
            <option value="preco_desc">Maior preço</option>
            <option value="novidades">Novidades</option>
        </select>
        </div>
        </div>

        <div style={{display: "flex", backgroundColor: '#fafafa'}}>

        <div style={{marginLeft: '115px', marginTop: '150px', width: '380', height: '820px', backgroundColor: "#ffff"}}>
            <h4 style={{backgroundColor: "white"}}>Filtrar por </h4>
            <hr  style={{marginBottom:'19px', width: '184px'}}/>

            <div>
                <h5 style={{backgroundColor: "white"}}>Marka</h5>
                <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Adidas</label> <br />
                <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}} />  <label> Calenciaga</label> <br />
                <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> K-Swiss</label> <br />
                <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Nike</label> <br />
                <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Puma</label>
            </div>
            <br />
            <div>
                <h5>Categoria</h5>
                 <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Esporte e lazer</label> <br />
                <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Casual</label> <br />
                <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Utilitario</label> <br />
                <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Corrida</label>
            </div>
                <br />
            <div>
                <h5>Gênero</h5>
                 <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Masculino</label> <br />
                <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Feminino</label> <br />
                <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Unisex</label>  <br />
            </div>
            <br />
            <div>
                <h5>Estado</h5>
                 <input  type="checkbox" style={{width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Novo</label> <br />
                <input  type="checkbox" style={{ width: '18px', height: '18px', border: '2px solid', borderRadius: '4px', cursor: 'pointer', position: 'relative', marginRight: '8px'}}/>  <label> Usado</label>
            </div>
        </div>
            <div>
                 <img src="/public/Group 53593.png" alt="" style={{marginTop: '136px', width: '290px', height: '430px', marginLeft: '95px'}}/>
                 <img src="/public/Group 53593.png" alt="" style={{marginTop: '136px', width: '290px', height: '430px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{marginTop: '136px', width: '290px', height:' 430px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{marginLeft: '95px', width: '290px', height:' 430px'}}/>
                <img src="/public/Group 53593.png" alt="" style={{width: '290px', height:' 430px'}}/>
                <img src="/public/Group 53593.png" alt="" style={{width: '290px', height:' 430px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{marginLeft: '95px', width: '290px', height:' 430px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{ width: '290px', height:' 430px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{ width: '290px', height:' 430px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{marginLeft: '95px', width: '290px', height:' 430px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{ width: '290px', height:' 430px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{ width: '290px', height:' 430px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{marginLeft: '95px', width: '290px', height:' 430px', marginBottom: '100px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{ width: '290px', height:' 430px', marginBottom: '100px'}}/>
                <img src="/public/Group 53595.png" alt="" style={{ width: '290px', height:' 430px', marginBottom: '100px'}}/>
          </div>
        </div>
        </>
     );
}
 
export default FilterGroup;
