import Layout from "./../components/layout/layout";
import { motion, AnimatePresence } from "framer-motion";

export default function Ranking() {
  return (
    <Layout title={"Ranking"}>
      <h1>Ranking page</h1>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Ranking page</h1>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
