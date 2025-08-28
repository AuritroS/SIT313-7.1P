import React from 'react';
import { Grid, List, Icon } from 'semantic-ui-react';

const Footer = () => (
  <div style={{ backgroundColor: '#77cfd9', padding: '2em' }}>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <List>
            <List.Header>Explore</List.Header>
            <List.Item>Home</List.Item>
            <List.Item>Questions</List.Item>
            <List.Item>Articles</List.Item>
            <List.Item>Tutorials</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column>
          <List>
            <List.Header>Support</List.Header>
            <List.Item>FAQs</List.Item>
            <List.Item>Help</List.Item>
            <List.Item>Contact Us</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column>
          <List horizontal>
            <List.Item><Icon name="facebook" /></List.Item>
            <List.Item><Icon name="twitter" /></List.Item>
            <List.Item><Icon name="instagram" /></List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <div style={{ marginTop: '1em', textAlign: 'center' }}>
      DEV@Deakin 2022 • Privacy Policy • Terms • Code of Conduct
    </div>
  </div>
);

export default Footer;
