import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const TutorialCard = ({ title, description, author }) => (
  <Card>
    <Image src="https://picsum.photos/200" wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="star" color="yellow" /> 5 {author}
    </Card.Content>
  </Card>
);

export default TutorialCard;
