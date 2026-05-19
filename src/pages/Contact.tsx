
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Instagram, MessageCircle, Truck } from "lucide-react";



export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi Best Choice!\n\nName: ${form.name}\nPhone: ${form.phone}\n\nMessage: ${form.message}`);
    window.open(`https://wa.me/919063821610?text=${msg}`, "_blank");
  };

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-blush text-center">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">Get in Touch</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-2">We'd <span className="text-gradient">Love</span> to Hear From You</h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto px-4">Visit our store, drop a message, or chat with us instantly on WhatsApp.</p>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        {/* Form */}
        <motion.form initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={submit} className="bg-card rounded-3xl p-8 md:p-10 shadow-card border border-border">
          <h2 className="font-display text-3xl font-bold mb-6">Send a Message</h2>
          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground">Name</label>
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full px-4 py-3 rounded-xl bg-blush border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition" placeholder="Your full name" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Phone Number</label>
              <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2 w-full px-4 py-3 rounded-xl bg-blush border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition" placeholder="10-digit mobile number" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full px-4 py-3 rounded-xl bg-blush border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none" placeholder="How can we help?" />
            </div>
            <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition hover:shadow-glow">
              <MessageCircle className="w-5 h-5" /> Send via WhatsApp
            </button>
          </div>
        </motion.form>

        {/* Info */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
          <div className="bg-gradient-primary rounded-3xl p-8 text-primary-foreground shadow-glow">
            <Clock className="w-8 h-8 mb-3" />
            <h3 className="font-display text-2xl font-bold">Business Hours</h3>
            <p className="mt-2 opacity-90">Monday – Sunday</p>
            <p className="text-3xl font-display font-bold mt-1">9:00 AM – 9:00 PM</p>
          </div>
          <div className="bg-card rounded-3xl p-6 border border-border shadow-card flex gap-4">
            <MapPin className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-muted-foreground text-sm mt-1">26/27/14, Chinna Gantiyada, Kanthi Road, Gajuwaka, Vizag</p>
            </div>
          </div>
          <div className="bg-card rounded-3xl p-6 border border-border shadow-card flex gap-4">
            <Phone className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="font-semibold">Call Us</p>
              <p className="text-muted-foreground text-sm mt-1"><a href="tel:8143078003" className="hover:text-primary">8143078003</a> · <a href="tel:9063821610" className="hover:text-primary">9063821610</a></p>
            </div>
          </div>
          <div className="bg-card rounded-3xl p-6 border border-border shadow-card flex gap-4">
            <Instagram className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="font-semibold">Instagram</p>
              <a href="https://instagram.com/best_choice_gajuwaka" target="_blank" rel="noreferrer" className="text-muted-foreground text-sm mt-1 hover:text-primary">@best_choice_gajuwaka</a>
            </div>
          </div>
          <div className="glass rounded-3xl p-6 flex items-center gap-4">
            <Truck className="w-8 h-8 text-primary" />
            <div>
              <p className="font-display text-lg font-bold">Online Delivery Available</p>
              <p className="text-sm text-muted-foreground">We deliver across Vizag — order on WhatsApp.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Map */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] overflow-hidden shadow-card border border-border">
          <iframe
            title="Best Choice Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.261271101918!2d83.1967153!3d17.6799804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3969f97a076af7%3A0x2dd37186e6a1ee92!2sBest%20Choice!5e0!3m2!1sen!2sin!4v1716123456789!5m2!1sen!2sin"
            className="w-full h-[450px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}