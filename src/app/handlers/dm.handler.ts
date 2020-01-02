import { IMessage, IContainer, IHandler } from '../../common/types';
import Constants from '../../common/constants';
import { DMChannel } from 'discord.js';

export class DMHandler implements IHandler {
  constructor(public container: IContainer) {}

  public async execute(message: IMessage): Promise<void> {
    if (!(message.channel instanceof DMChannel)) {
      return;
    }
  }

  build(content: string) {
    if (content.charAt(0) !== Constants.Prefix) {
      return undefined;
    }

    const messageArr = content.slice(1).split(' ');
    const name = messageArr[0].toLowerCase();
    const args = messageArr.slice(1);
    return { name, args };
  }
}
