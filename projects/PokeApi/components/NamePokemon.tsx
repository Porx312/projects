import React from 'react';
import { motion } from 'framer-motion';

const NamePokemon = ({ name, id }: { name: string; id: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex md:w-20 w-[150px] pl-10 h-20 md:h-full items-center top-18 md:top-0 left-0 flex-row md:flex-col absolute md:relative justify-between"
    >
      <motion.h2 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/40 py-5 px-8 md:text-3xl text-xl font-bold text-white rounded-2xl"
      >
        {id}
      </motion.h2>
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-white text-3xl md:text-9xl font-extrabold md:absolute relative bottom-0 left-1"
      >
        {name}
      </motion.h2>
    </motion.div>
  );
};

export default NamePokemon;