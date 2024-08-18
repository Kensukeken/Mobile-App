import { Image, StyleSheet, Platform } from 'react-native';

import { Leaf } from '@/components/Leaf';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#5c4c73', dark: '#5c4c73' }} headerImage={
        <Image
        source={require('@/assets/images/home.png')}
        style={{ width: 400, height: 300 }}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Story of My Life</ThemedText>
        <Leaf />
      </ThemedView>
      <Collapsible title="Chapter 1">
  <ThemedView style={styles.stepContainer}>
    <ThemedText type="subtitle">First Year Of Highschool</ThemedText>
    <ThemedText>
      I thought that entering high school the first year was the same experience that I had dealt with in my last year of middle school. But little did I know that I let my experience get to my head because I let the toxic people from my middle school say it all aloud. Turns out I was completely wrong. Entering high school changed my complicated thinking from middle school, which gave me new friendships, personal growth, and a great experience that changed my life. 
    </ThemedText>
    <ThemedText>
      During my last year of middle school, I remember a precious moment when it was lunchtime. Students were screaming; playing with their friends during English class. The weather seemed to me to be refreshing outside, the atmosphere was soft, and the birds were singing. I was the only person who was very silent. In middle school, I never really had friends except my twin sister, Hana, who was the only person I could confide in and rely on. Middle school was the worst year of my life because there were always students picking either on me or my twin sister, Hana. We would either get bullied or get hated for their silly reasons. Although on my graduation day I did not look happy on that day. 
    </ThemedText>
    <ThemedText>
      Upon entering high school, I was nervous and paranoid. In high school, my experience was quite different from what I expected. Before entering high school, we took an exam called “Liseye Geçiş Sınavı (LGS),” which refers to a high school entrance exam. This exam is essential in Türkiye, as our teacher mentioned in the past. In the meantime, my twin sister and I were placed in different schools to take the exam, but we both managed to pass with an impressive average of 95%. Our reactions were, “We did it!” and our family was proud of us. My high school was close to our house, and we could walk to school in an "L" shape.
    </ThemedText>
    <ThemedText>
      Reflecting on my past, I thought, “My middle school was the worst place I had ever been in my life. I was in 8th grade and had never enjoyed middle school because of bullies. People constantly bullied us, and I thought high school would be the same. The last day of middle school did not end happily either.” I was afraid I would be alone if my twin sister were not with me, but I was glad we both got into the same high school. Entering high school in 2019 was a new experience and I was amazed at it. 
    </ThemedText>
    <ThemedText>
      I did not know where my classmates were or where we should go. It feels like a new school for us. We decided to separate from each other and see who would find the class first. In the result of this, my twin sister found our class first and it was “9p”. She was already talking to people, and they seemed interested in her. I was surprised that she had already made new friends and told me to say hi with a smile looking happy. 
    </ThemedText>
    <ThemedText>
      I said, “Hi everyone,” and they replied with “Hey, is this your twin sister?” My sister said “Yes!” and people were shocked and amazed by us. Our high school had never had twins like us before, they decided to start talking with us, and we made new friends. After a few days of getting to know people in high school, I saw a few of my classmates from 8th grade during lunchtime. They were shocked to see me and tried to say hi, but I ignored them. I felt alone at lunch, but I spent my time in the library. Some people approached me there and asked, “Is it true that you know many languages?” I replied, “Yes.” I wondered how they knew, and then they said, “Oh my god, these twins are so amazing.” Perhaps it was my twin sister who told them about this, and we both felt famous. Whenever I wanted to buy something, they treated me like a queen. Even the bullies were surprised by this. At that moment, I realized I was wrong about high school being worse than middle school; it was better than I expected and changed my thoughts. I loved my high school, but it did not offer a strong education for English learners. I decided to move to Canada, where the education system was much better for people learning English.
    </ThemedText>
  </ThemedView>
</Collapsible>

   
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
