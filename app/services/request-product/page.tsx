"use client";


import { Upload } from 'lucide-react';
import servicesStyles from '../services.module.css';

export default function RequestProductPage() {
    return (
        <>

            <main>
                {/* Hero Section with White Box */}
                <div className={servicesStyles.heroSection} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1200&h=600&fit=crop&q=80")', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {/* No overlay div needed if we want clean image behind, but box needs to pop. Screenshot has overlay? 
                        The screenshot seems to have a clear image with a white box. 
                        Let's keep heroOverlay for contrast if needed, or remove it. 
                        Screenshot 1 shows "Request a Product" box over a beige bag image. 
                        Let's try to simulate that centered box look.
                     */}
                    <div className={servicesStyles.requestHeroBox}>
                        <h1 className={servicesStyles.requestHeroTitle}>Request a Product</h1>
                        <p className={servicesStyles.requestHeroText}>
                            Looking for something specific? Share detailed requirements with us, and we'll work to source it just for you.
                        </p>
                    </div>
                </div>

                <div className={servicesStyles.contentContainer}>
                    <h2 className={servicesStyles.formTitle}>Complete this form</h2>

                    <div className={servicesStyles.reqFormContainer}>
                        <form>
                            {/* Name split row */}
                            <div className={servicesStyles.formGroup}>
                                <label className={servicesStyles.reqLabel}>
                                    Name <span className={servicesStyles.reqLabelRequired}>(required)</span>
                                </label>
                                <div className={servicesStyles.reqFormRow}>
                                    <div className={servicesStyles.reqFormCol}>
                                        <input type="text" className={servicesStyles.reqInput} placeholder="First Name" required />
                                    </div>
                                    <div className={servicesStyles.reqFormCol}>
                                        <input type="text" className={servicesStyles.reqInput} placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>

                            <div className={servicesStyles.formGroup}>
                                <label className={servicesStyles.reqLabel}>
                                    Email <span className={servicesStyles.reqLabelRequired}>(required)</span>
                                </label>
                                <input type="email" className={servicesStyles.reqInput} placeholder="gulvaiz@gmail.com" defaultValue="gulvaiz@gmail.com" required />
                            </div>

                            <div className={servicesStyles.formGroup}>
                                <label className={servicesStyles.reqLabel}>
                                    What is your budget? <span className={servicesStyles.reqLabelRequired}>(required)</span>
                                </label>
                                <input type="text" className={servicesStyles.reqInput} placeholder="e.g, ₹50,000 - ₹1,00,000" required />
                            </div>

                            <div className={servicesStyles.formGroup}>
                                <label className={servicesStyles.reqLabel}>
                                    Brand <span className={servicesStyles.reqLabelRequired}>(required)</span>
                                </label>
                                <input type="text" className={servicesStyles.reqInput} placeholder="e.g., Louis Vuitton" required />
                            </div>

                            <div className={servicesStyles.formGroup}>
                                <label className={servicesStyles.reqLabel}>
                                    Model <span className={servicesStyles.reqLabelRequired}>(required)</span>
                                </label>
                                <input type="text" className={servicesStyles.reqInput} placeholder="e.g., Neverfull MM" required />
                            </div>

                            <div className={servicesStyles.formGroup}>
                                <label className={servicesStyles.reqLabel}>
                                    Colour <span className={servicesStyles.reqLabelRequired}>(required)</span>
                                </label>
                                <input type="text" className={servicesStyles.reqInput} placeholder="e.g., Beige" required />
                            </div>

                            <div className={servicesStyles.formGroup}>
                                <label className={servicesStyles.reqLabel}>
                                    Specifications / Other Information
                                </label>
                                <textarea className={servicesStyles.textarea} style={{ marginBottom: '25px', backgroundColor: '#fff', padding: '14px', fontSize: '0.95rem' }} placeholder="The more specific you are here, the better we can find the right piece for you."></textarea>
                            </div>

                            <div className={servicesStyles.formGroup}>
                                <label className={servicesStyles.reqLabel}>
                                    Reference Image <span className={servicesStyles.reqLabelOptional}>(optional)</span>
                                </label>
                                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '10px' }}>Upload an image to help us better understand what you're looking for</p>
                                <div className={servicesStyles.fileUploadBox}>
                                    <Upload size={32} color="#888" />
                                    <p className={servicesStyles.uploadText}>Click to upload or drag and drop</p>
                                    <p className={servicesStyles.uploadSubText}>PNG, JPG, JPEG or WebP (max 10MB)</p>
                                </div>
                            </div>

                            <button type="submit" className={servicesStyles.submitBtnBlack}>
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </main>

        </>
    );
}
