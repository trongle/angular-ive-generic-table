export abstract class ModelTransformer<T>{
  abstract transform<T>(model: T[]): any;
};