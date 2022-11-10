import Sound from 'react-native-sound';
import { Vibration } from 'react-native';

const BellManage = {
  _subscription: null,
  _whooshIncoming: null,
  _whooshOutgoing: null,
  vibrate: () => {
    Vibration.vibrate([0, 500, 1000, 500], true);
  },
  virateCancle: () => {
    Vibration.cancel();
  },
  initIncomingSound: () => {
    Sound.setCategory('Playback');
    return new Promise((resolve, reject) => {
      BellManage._whooshIncoming = new Sound(
        'zego_incoming.mp3',
        Sound.MAIN_BUNDLE,
        (error) => {
          if (error) {
            console.log('Failed to load the sound of zego_incoming', error);
            reject();
          } else {
            BellManage._whooshIncoming.setNumberOfLoops(-1);
            resolve(BellManage._whooshIncoming);
          }
        }
      );
    });
  },
  initOutgoingSound: () => {
    return new Promise((resolve, reject) => {
      BellManage._whooshOutgoing = new Sound(
        'zego_outgoing.mp3',
        Sound.MAIN_BUNDLE,
        (error) => {
          if (error) {
            console.log('Failed to load the sound of zego_outgoing', error);
            reject();
          } else {
            BellManage._whooshOutgoing.setNumberOfLoops(-1);
            resolve(BellManage._whooshOutgoing);
          }
        }
      );
    });
  },
  playIncomingSound: () => {
    BellManage._whooshIncoming.play((success) => {
      if (success) {
        console.log('successfully finished playing zego_incoming');
      } else {
        console.log(
          'playback zego_incoming failed due to audio decoding errors'
        );
      }
    });
    console.log('successfully playing zego_incoming');
  },
  stopIncomingSound: () => {
    BellManage._whooshIncoming.stop(() => {
      console.log('successfully stop playing zego_incoming');
    });
  },
  playOutgoingSound: () => {
    BellManage._whooshOutgoing.play((success) => {
      if (success) {
        console.log('successfully finished playing zego_outgoing');
      } else {
        console.log(
          'playback zego_outgoing failed due to audio decoding errors'
        );
      }
    });
    console.log('successfully playing zego_outgoing');
  },
  stopOutgoingSound: () => {
    BellManage._whooshOutgoing.stop(() => {
      console.log('successfully stop playing zego_outgoing');
    });
  },
  releaseIncomingSound: () => {
    BellManage._whooshIncoming.release();
    console.log('successfully release the audio player resource');
  },
  releaseOutgoingSound: () => {
    BellManage._whooshOutgoing.release();
    console.log('successfully release the audio player resource');
  },
};

export default BellManage;