import { useId, useState, type FC } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import styles from "./AccordeonList.module.scss";
import classNames from "classnames";
import { MotionRadialBorder } from "..";

export type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type Props = {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const rowVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const AccordionList: FC<Props> = ({
  items,
  defaultOpenId,
  allowMultiple = true,
}) => {
  const shouldReduce = useReducedMotion();
  const groupId = useId();
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(defaultOpenId ? [defaultOpenId] : [])
  );

  const isOpen = (id: string) => openIds.has(id);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);

      if (!allowMultiple) next.clear();
      console.log(prev);

      if (next.has(id)) next.delete(id);
      else next.add(id);

      return next;
    });
  };

  return (
    <motion.div
      className={styles.Accordeon_List}
      variants={containerVariants}
      initial="hidden"
      whileInView={shouldReduce ? undefined : "show"}
      animate={shouldReduce ? "show" : undefined}
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((it) => {
        const opened = isOpen(it.id);
        const panelId = `${groupId}-panel-${it.id}`;
        const btnId = `${groupId}-btn-${it.id}`;

        return (
          <MotionRadialBorder
            key={it.id}
            className={styles.Accordeon_Item}
            variants={rowVariants}
          >
            <button
              id={btnId}
              className={styles.Accordeon_Header}
              onClick={() => toggle(it.id)}
              aria-expanded={opened}
              aria-controls={panelId}
              type="button"
            >
              <span className={styles.Accordeon_Title}>{it.title}</span>

              <motion.span
                className={styles.Accordeon_Icon}
                animate={{ rotate: opened ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <span className={styles.Accordeon_Icon_Line} />
                <span
                  className={classNames(
                    styles.Accordeon_Icon_Line,
                    styles.Accordeon_Icon_Line_V
                  )}
                />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {opened && (
                <motion.div
                  key="content"
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={styles.Accordeon_Content_Wrap}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className={styles.Accordeon_Content}>{it.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </MotionRadialBorder>
        );
      })}
    </motion.div>
  );
};

export default AccordionList;
