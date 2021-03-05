import React from 'react';
import {Avatar, Card, List, Paragraph} from 'react-native-paper';
import {StyleSheet, SafeAreaView} from 'react-native';

const css = StyleSheet.create({
  base: {
    margin: 5,
  },
  br: {
    marginTop: 5,
  },
});

const My = () => {
  return (
    <SafeAreaView style={css.base}>
      <Card>
        <Card.Title
          title="程福源"
          subtitle="学生"
          left={(props) => <Avatar.Text size={50} label="程" />}
        />
      </Card>
      <Card style={css.br}>
        <List.Item
          title="First Item"
          description="Item description"
          left={(props) => <List.Icon {...props} icon="folder" />}
        />
      </Card>
    </SafeAreaView>
  );
};

export default My;
