import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react';

const NewsletterSignup = () => (
  <Form>
    <Form.Field>
      <label>Sign up for our daily insider</label>
      <Input action={{ content: 'Subscribe' }} placeholder='Enter your email' />
    </Form.Field>
  </Form>
);

export default NewsletterSignup;
