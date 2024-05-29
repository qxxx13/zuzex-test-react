type ImageType = 'png' | 'jpeg';

export type Base64Type<imageType extends string> =
    `data:image/${imageType};base64${string}`;
