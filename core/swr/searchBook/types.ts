export interface AxiosSearchBookList {
    kind?: string;
    totalItems?: number;
    items?: BookList[];
}

export interface BookList {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo; 
}

export interface VolumeInfo {
    title: string;
    authors?: string[];
    publishedDate: string;
    description?:string;
    industryIdentifiers?: IndustryIdentifiers[];
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export interface IndustryIdentifiers {
    type: string;
    identifier: string;
}

export interface ReadingModes {
    text: boolean;
    image: boolean;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
}

export interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface Epub {
    isAvailable: boolean;
}

export interface Pdf {
    isAvailable: boolean;
}