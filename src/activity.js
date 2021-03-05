import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Title, Card, Button, TextInput} from 'react-native-paper';

const css = StyleSheet.create({
  base: {
    margin: 5,
  },
});

const Activity = () => {
  return (
    <SafeAreaView style={css.base}>
      <TextInput
        label="搜索"
        value={""}
        onChangeText={(text) => setText(text)}
      />
      <Card>
        <Card.Cover source={require('../resource/image/valentinepark.jpg')} />
        <Card.Content>
          <Title>某公园需要一些志愿者做清洁工作</Title>
        </Card.Content>
        <Card.Actions>
          <Button>了解详情</Button>
          <Button>参与</Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
};

export default Activity;
