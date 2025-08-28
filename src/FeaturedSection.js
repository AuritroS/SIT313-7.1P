import React from 'react';
import { Header, Card, Button } from 'semantic-ui-react';
import ArticleCard from './ArticleCard';
import TutorialCard from './TutorialCard';
import faker from 'faker';

const FeaturedSection = () => {
  const articles = Array(3).fill().map(() => ({
    title: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    author: faker.name.findName()
  }));

  const tutorials = Array(3).fill().map(() => ({
    title: faker.hacker.verb() + " " + faker.hacker.noun(),
    description: faker.hacker.phrase(),
    username: faker.internet.userName()
  }));

  return (
    <>
      <Header as="h2" textAlign="center">Featured Articles</Header>
      <Card.Group centered>{articles.map((a, i) => (
        <ArticleCard key={i} {...a} />
      ))}</Card.Group>
      <div style={{ textAlign: "center", margin: "1rem" }}>
  <Button>See all articles</Button>
</div>


      <Header as="h2" textAlign="center">Featured Tutorials</Header>
      <Card.Group centered>{tutorials.map((t, i) => (
        <TutorialCard key={i} title={t.title} description={t.description} author={t.username} />
      ))}</Card.Group>
      <div style={{ textAlign: "center", margin: "1rem" }}>
  <Button>See all articles</Button>
</div>
    </>
  );
};

export default FeaturedSection;
