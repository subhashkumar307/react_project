import React from 'react';
import axios from 'axios';

export default class NasaMarsComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            nasaObject : {
                photos: []
            }
        }
        
    }
    componentDidMount(){
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(res => {
            this.setState({
                nasaObject: {
                    photos: res.data.photosyes
                    
                }
            })
        })
    }
    render(){
        return(
            <>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Sol</th>
                            <th>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                
                                this.state.photos.map(mars =>

                                    <tr key={mars.id}>
                                        <td>{mars.id}</td>
                                        <td>{mars.sol}</td>
                                        <td>
                                            <img src={mars.img_src} alt={mars.id} width="100" height="100" />
                                        </td>
                                    </tr>
                                )
                            
                        }
                        
                    </tbody>

                </table>
            </>
        )
    }
}