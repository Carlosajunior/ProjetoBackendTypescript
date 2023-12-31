export abstract class Entity<T> {
    public readonly props: T;

    constructor(props: T) {
        this.props = props;
    }

    public get(): T {
        return this.props;
    }
}
