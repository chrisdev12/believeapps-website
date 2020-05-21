import React from 'react';
import pet from '@frontendmasters/pet'

class Test extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    pet.animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false
        })
    })
  }
  render() {
    if (this.state.loading) {
      return <h1> Loading...</h1>
    } 

    const { name, animal, media, breed } = this.state;
    let hero = "http://placecorgi.com/300/300";
    if (media.length) {
      hero = media[0].small;
    }
    return (
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <img src={hero} alt={name} />
      </div>
    )

  };
}

export default Test;