import styles from './Divider.module.css';

interface DividerProps {
  query: string;
  content: number;
}

export const Divider = ({ query, content }: DividerProps) => {
  return (
    <>
      {!query ? (
        <h3 className={styles.spotlight}>In the spotlight</h3>
      ) : content === 0 ? (
        ''
      ) : (
        <h3 className={styles.all}>{`TV Shows (${content})`}</h3>
      )}
    </>
  );
};
