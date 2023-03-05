import React, { Component } from 'react'
import Products from '../Products'
import Button from '@mui/material/Button'

const productsArray = [
  {
    name: 'Leather Jacket',
    category: 'jackets',
    description:
      "Whether it's to protect from wind or just to look super cool, this leather jacket has you covered.",
    price: 400,
  },
  {
    name: 'Wool cardigan',
    category: 'jackets',
    description:
      'Beautifully warm and soft, this cardigan will make you feel cosy on a cold day.',
    price: 80,
  },
  {
    name: 'Striped business shirt',
    category: 'shirts',
    description:
      'No ironing necessary to look professional every day with this striped shirt.',
    price: 50,
  },
  {
    name: 'Short-sleeved polo shirt',
    category: 'shirts',
    description: 'The best shirt you can get for that business-casual look.',
    price: 30,
  },
  {
    name: 'Plain business shirt',
    category: 'shirts',
    description:
      'No ironing necessary to look professional every day with this plain business shirt.',
    price: 50,
  },
  {
    name: 'Suit Jacket',
    category: 'jackets',
    description: 'Wear it with jeans or suit pants, it works with both!',
    price: 120,
  },
  {
    name: 'Suit Trousers',
    category: 'pants',
    description:
      "Get 5 of these and you've got pants for every day of the week.",
    price: 100,
  },
  {
    name: 'Denim Jeans',
    category: 'pants',
    description:
      'A timeless classic, these denim jeans will never go out of style.',
    price: 80,
  },
  {
    name: 'Pencil Skirt',
    category: 'skirts',
    description:
      'A classy work-ready skirt that will make you feel like a million bucks.',
    price: 100,
  },
  {
    name: 'Cotton flowy skirt',
    category: 'skirts',
    description:
      'For those warm summer days when you just need to feel the breeze on your legs.',
    price: 45,
  },
]

class Productlist extends Component {
  state = { hehearray: productsArray, value: '' }

  filterShirt = () => {
    const filterProducts = productsArray.filter((item) => item.category === 'shirts' )
    this.setState({ hehearray: filterProducts })
  }
  filterPantsandSkirts = () => {
    const filterProducts = productsArray.filter((item) => item.category === 'pants' || item.category === 'skirts' )
    this.setState({ hehearray: filterProducts })  }
  filterJackets = () => {
    const filterProducts = productsArray.filter((item) =>item.category === 'jackets' )
    this.setState({ hehearray: filterProducts }) }
  filterAll = () => { this.setState({ hehearray: productsArray }) }
  find = (e) => {
    console.log('search item', e.target.value.toLowerCase())
    const filterProducts = productsArray.filter(
      (item) =>item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.description.toLowerCase().includes(e.target.value.toLowerCase()) )
    this.setState({ hehearray: filterProducts })
  }
  lowtohigh = () => {
    const filterProducts = productsArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    this.setState({ hehearray: filterProducts })
  }
  hightolow = () => {
    const filterProducts = productsArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    this.setState({ hehearray: filterProducts })
  }

  render() {
    return (
      <>
        <Button onClick={this.filterShirt}>shirt</Button>

        <Button onClick={this.filterPantsandSkirts}>pants and skirts</Button>
        <Button onClick={this.filterJackets}>jackets</Button>
        <Button onClick={this.filterAll}>All products</Button>
        <input type="text" onChange={this.find} />
        <Button onClick={this.lowtohigh}>sort by price- low to high</Button>
        <Button onClick={this.hightolow}>sort by price- high to low</Button>
        {this.state.hehearray.map((products) => (
          <Products
            key={products.name}
            name={products.name}
            category={products.category}
            desc={products.description}
            price={products.price}
          />
        ))}
      </>
    )
  }
}
export default Productlist
